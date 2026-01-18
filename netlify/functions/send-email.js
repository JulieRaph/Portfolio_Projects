const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    // Gère les requêtes OPTIONS (preflight CORS)
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // Gère uniquement les requêtes POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        // Parse les données du formulaire
        const { from_name, from_email, message } = JSON.parse(event.body);

        // Validation des champs
        if (!from_name || !from_email || !message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ 
                    error: 'Tous les champs sont requis' 
                })
            };
        }

        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(from_email)) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ 
                    error: 'Email invalide' 
                })
            };
        }

        // Validation longueur message
        if (message.length > 5000) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ 
                    error: 'Message trop long (max 5000 caractères)' 
                })
            };
        }

        // Récupère les paramètres SMTP depuis les variables d'environnement
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const receiverEmail = process.env.RECEIVER_EMAIL;

        // Vérifie que tout est défini
        if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !receiverEmail) {
            console.error('Variables SMTP manquantes');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ 
                    error: 'Configuration serveur incorrecte' 
                })
            };
        }

        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: parseInt(smtpPort),
            secure: false, // false pour port 587 (STARTTLS)
            auth: {
                user: smtpUser,
                pass: smtpPass
            }
        });

        // Contenu de l'email
        const mailOptions = {
            from: `"Portfolio Contact" <${smtpUser}>`,
            to: receiverEmail,
            replyTo: from_email,
            subject: `[Portfolio] Message de ${from_name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #5dbdc1 0%, #4da8ac 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="color: white; margin: 0;">📧 Nouveau message</h1>
                        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Depuis votre portfolio</p>
                    </div>
                    
                    <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                            <p style="margin: 0 0 10px 0;"><strong style="color: #5dbdc1;">Nom :</strong> ${from_name}</p>
                            <p style="margin: 0;"><strong style="color: #5dbdc1;">Email :</strong> <a href="mailto:${from_email}" style="color: #4da8ac; text-decoration: none;">${from_email}</a></p>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #5dbdc1; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                            <h3 style="margin: 0 0 15px 0; color: #333;">Message :</h3>
                            <p style="white-space: pre-wrap; color: #555; line-height: 1.6;">${message}</p>
                        </div>
                        
                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
                            <p style="color: #999; font-size: 12px; margin: 0;">
                                ✉️ Envoyé depuis le formulaire de contact de votre portfolio
                            </p>
                        </div>
                    </div>
                </div>
            `
        };

        // Envoie l'email
        await transporter.sendMail(mailOptions);

        console.log('✅ Email envoyé avec succès');

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ 
                success: true,
                message: 'Email envoyé avec succès !' 
            })
        };

    } catch (error) {
        console.error('❌ Erreur lors de l\'envoi:', error);
        
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Erreur lors de l\'envoi de l\'email',
                details: error.message 
            })
        };
    }
};