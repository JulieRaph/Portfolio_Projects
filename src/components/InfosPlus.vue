<script setup>
const langues = [
  { nom: "Français", niveau: "Langue maternelle", emoji: "🇫🇷" },
  { nom: "Anglais", niveau: "Intermédiaire", emoji: "🇬🇧" },
  { nom: "Espagnol", niveau: "Notions", emoji: "🇪🇸" }
]

const voyages = [
  { pays: "Amérique du Sud", drapeaux: ["colombia", "argentina", "chile", "peru", "bolivia", "uruguay"] },
  { pays: "Amérique centrale", drapeaux: ["costa-rica", "panama"] },
  { pays: "Emirats Arabes Unis", drapeaux: ["uae"]},
  { pays: "Europe/World", drapeaux: ["sweden", "norway", "italia", "irland", "denmark", "island"]}
]

const interets = [
  "Moto 🏍️",
  "Voyages ✈️",
  "Randonnée - Activité Nature",
]

const tousLesdrapeaux = voyages.flatMap(voyage => voyage.drapeaux || []);
</script>

<template>
  <section class="infos-supp fade-in">
    <h2 class="text-highlight-1 section-title">Profil & Intérêts</h2>

    <div class="info-block">
      <h3>Langues</h3>
      <ul>
        <li v-for="(langue, index) in langues" :key="index" class="langue-item">
          <span class="flag-emoji">{{ langue.emoji }}</span>
          <span class="langue-nom">{{ langue.nom }}</span>
          <span class="langue-niveau">{{ langue.niveau }}</span>
        </li>
      </ul>
    </div>
    <!-- Voyages longue durée -->
    <div class="info-block">
      <h3>Voyages longue durée</h3>
      <ul>
        <li v-for="(voyage, index) in voyages" :key="index" class="voyage-item">
            {{ voyage.pays }}
        </li>
      </ul>
    </div>

    <!-- Centres d'intérêt -->
    <div class="info-block">
      <h3>Centres d’intérêt</h3>
      <ul>
        <li v-for="(interet, index) in interets" :key="index" class="interet-item">
          {{ interet }}
        </li>
      </ul>
    </div>

    <div class="flags-animated-container">
        <div class="flags-scroll">
            <div class="flags-row">
                <img
                    v-for="(flag, index) in tousLesdrapeaux"
                    :key="`first-${index}`"
                    :src="`/assets/flags/${flag}.svg`"
                    alt=""
                    aria-hidden="true"
                    class="flag-icon-animated"
                />
            </div>
            <div class="flags-row">
                <img
                    v-for="(flag, index) in tousLesdrapeaux"
                    :key="`second-${index}`"
                    :src="`/assets/flags/${flag}.svg`"
                    alt=""
                    aria-hidden="true"
                    class="flag-icon-animated"
                />
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>

/* Animation fade-in */
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to   { opacity: 1; transform: translateY(0); }
}

.info-block {
  margin-bottom: 1.5rem;
}

.info-block h3 {
  font-size: 1.2rem;
  color: var(--vt-c-custom-text-2);
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.langue-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.8rem 0;
  padding: 0.6rem 0;
  color: var(--vt-c-custom-text-normal);
  font-size: 18px;
}

.flag-emoji {
  font-size: 18px;
  line-height: 1;
  flex-shrink: 0;
}

.langue-nom {
  font-weight: 400;
  min-width: 100px;
  color: var(--vt-c-custom-text-1);
}

.langue-niveau {
  color: var(--vt-c-custom-text-2);
  font-style: italic;
}

.voyage-item, .interet-item {
    margin: 0.6rem 0;
    padding: 0.3rem 0;
    color: var(--vt-c-custom-text-normal);
}

.flags-animated-container {
    margin-top: 1.5rem;
    overflow: hidden;
    width: 100%;
    border-radius: 8px;
    padding: 1.5rem 0;
    position: relative;
}

.flags-scroll {
    display: flex;
    width: calc(200%);
    animation: scrollFlags 30s linear infinite;
    gap: 2rem;
}

@keyframes scrollFlags {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.flags-row {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-shrink: 0;
}

/* Style des drapeaux animés */
.flag-icon-animated {
  width: 80px;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.flag-icon-animated:hover {
  transform: scale(1.3);
  z-index: 10;
}

/* Animation de pause au survol du container */
.flags-animated-container:hover .flags-scroll {
  animation-play-state: paused;
}

@media screen and (max-width: 768px) {
  .flags-scroll {
    animation-duration: 20s; /* Plus rapide sur mobile */
  }
  
  .flag-icon-animated {
    width: 48px;
  }
  
  .flags-row {
    gap: 1.5rem;
  }
}
</style>
