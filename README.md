# UP WP Resize Admin Aside

Un plugin WordPress simple qui permet de redimensionner la sidebar de l'interface d'administration WordPress.

## Description

Ce plugin ajoute une fonctionnalité de redimensionnement à la sidebar de l'interface d'administration WordPress. Il permet aux utilisateurs d'ajuster la largeur de la sidebar selon leurs préférences, entre 280px et 600px.

## Installation

1. Téléchargez le dossier `up-wp-resize-admin-aside` dans le répertoire `/wp-content/plugins/`
2. Activez le plugin dans le menu 'Plugins' de WordPress

## Structure
up-wp-resize-admin-aside/
├── assets/
│ └── js/
│ └── flex-admin-aside.js
├── up-wp-resize-admin-aside.php
└── README.md

## Fonctionnalités

- Ajout d'une poignée de redimensionnement sur la sidebar admin
- Redimensionnement fluide avec des limites min/max
- Styles injectés dynamiquement
- Compatible avec l'interface moderne de WordPress
- Fonctionne sur tous les écrans d'administration

## Technique

- Pattern Singleton pour éviter les instances multiples
- Injection CSS via JavaScript pour éviter les conflits
- Utilisation des bonnes pratiques WordPress pour le chargement des scripts
- Gestion du cache avec filemtime()

## Version
1.0.0

## Auteur
UP - GEHIN Nicolas

