const emailjs = require('@emailjs/nodejs');

exports.handler = async (event, context) => {
    // Gère uniquement les requêtes POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({error: 'Method not allowed'})
        };
    }
    try {
        // Parse les données du formulaire
        const { from_name, from_email, message } = JSON.parse(event.body);

        // Validation des champs
        if (!from_name || !from_email || !message) {
            return {
                statusCode: 400,
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
                body: JSON.stringify({
                    error: 'Email invalide'
                })
            };
        }

        // Validation longueur message
        if (message.length > 5000) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: 'Message trop long (max 5000 caractères)'
                })
            };
        }

        // Récupère les clés depuis les variables d'environnement
        const serviceId = process.env.EMAILJS_SERVICE_ID;
        const templateId = process.env.EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.EMAILJS_PUBLIC_KEY;
        const privateKey = process.env.EMAILJS_PRIVATE_KEY;

        if (!serviceId || !templateId || !publicKey || !privateKey) {
            console.error('Variables d\'environnement manquantes');
            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: 'Configuration serveur incorrecte'
                })
            };
        }

        // Prépare les paramètres du template
        const templateParams = {
            from_name,
            from_email,
            message
        };

        // Envoie l'email via EmailJS
        const response = await emailjs.send(
            serviceId,
            templateId,
            templateParams,
            {
                publicKey: publicKey,
                privateKey: privateKey
            }
        );

        console.log('Email envoyé avec succès:', response);

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: 'Email envoyé avec succès'
            })
        };
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Erreur lors de l\'envoi de l\'email',
                details: error.message
            })
        };
    }
};