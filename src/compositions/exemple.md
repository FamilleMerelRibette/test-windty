---
title: Une Compo
draft: true
modele: premier
layout: modeles/premier
affiche: media/une-affiche.jpg
---

<div class="container mx-auto p-4">
  <div class="grid md:grid-cols-2 gap-8">
    <!-- Colonne de gauche : Affiche -->
    <div class="flex justify-center items-start">
      <img 
        src="{{ affiche }}" 
        alt="Affiche de {{ title }}" 
        class="rounded-lg shadow-lg max-w-full h-auto"
      >
    </div>
    
    <!-- Colonne de droite : Présentation -->
    <div class="space-y-4">
      <h1 class="text-3xl font-bold mb-4">{{ title }}</h1>
      
      <div class="prose prose-lg">
        <p class="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
