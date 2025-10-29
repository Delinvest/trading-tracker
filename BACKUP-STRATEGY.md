# 📦 Stratégie de Sauvegarde - Trading Tracker

## 🔐 Niveaux de Protection

### Niveau 1 : GitHub (Cloud)
- **main** : Branche production (stable)
- **develop** : Branche développement (tests)
- **backup/v1.0-production** : Sauvegarde complète v1.0
- **Tags** : v1.0-stable, v1.0-backup-01, etc.

### Niveau 2 : Sauvegardes Locales
- Dossier : `~/Desktop/BACKUPS-TRADING-TRACKER/`
- Archives compressées (sans node_modules)
- Format : `trading-tracker-v1.0-stable-YYYYMMDD-HHMMSS.tar.gz`
- Fichiers .env sauvegardés séparément

### Niveau 3 : Render
- Déploiement automatique depuis GitHub
- Rollback possible via Git
- Historique des déploiements dans Render Dashboard

## 🔄 Procédure de Restauration

### Si quelque chose casse :

1. **Revenir à la version GitHub stable** :
```bash
   git checkout v1.0-stable
   git push -f origin main
```

2. **Restaurer une archive locale** :
```bash
   tar -xzf BACKUPS-TRADING-TRACKER/trading-tracker-v1.0-stable-*.tar.gz
```

3. **Rollback sur Render** :
   - Dashboard Render → Services → Redeploy previous version

## 📅 Calendrier de Maintenance

- Avant chaque modification importante → commit + tag
- Après chaque feature qui marche → push + backup
- Hebdomadaire → nouvelle archive sauvegardée

