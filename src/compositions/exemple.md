---
title: Une Compo
draft: true
modele: premier
layout: modeles/premier
affiche: media/msm.jpg
---

<div class="container mx-auto p-4">
  <div class="grid md:grid-cols-2 gap-8">
    <!-- Colonne de gauche : Affiche -->
    <div class="flex justify-center items-start">
      <img
          width="500"
        src="{{ affiche }}"
        alt="Affiche de {{ title }}"
        class="rounded-lg shadow-lg h-auto"
      >
    </div>

    <!-- Colonne de droite : Présentation -->
    <div class="space-y-4">
      <h1 class="text-3xl font-bold mb-4">{{ title }}</h1>

      <div class="prose prose-lg">
        <p class="text-lg text-gray-700">
        Bienvenue à “Ma Sœur se Marie” ! Un spectacle inoubliable où la musique et le théâtre se rencontrent pour vous faire revivre les grands classiques de la chanson française.

        Rose vous embarquera dans une aventure musicale unique. Vous serez les chefs d’orchestre et choisirez les chansons qu’elle interprétera au fur et à mesure, créant ainsi un spectacle personnalisé.

        Grâce à votre aide, elle découvrira enfin la chanson parfaite pour le mariage de sa sœur.

        Préparez-vous à chanter, rire et être émus. “Ma Sœur se Marie” est bien plus qu’un concert, c’est une expérience interactive et mémorable à ne pas manquer !
        </p>

        <div class="mt-6">
          <h2 class="text-xl font-semibold mb-2">Détails de la composition</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Durée : 45 minutes</li>
            <li>Genre : Contemporain</li>
            <li>Année de création : 2024</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
