---
description: Sida bogaaga loogu saaro GitHub Pages looguna daro Google Search
---

# Hagaha Hawada-Saarka (GitHub Pages & Google Search)

Raac tillaabooyinkan si aad bogaaga online uga dhigto, looguna dhex baadhi karo Google.

## Tillaabada 1aad: Code-ka u dir GitHub

1. Fur terminal-ka adigoo jooga folder-ka `Portfolio`.
2. Bilaaw Git (haddii uusan hore u jirin):
   ```bash
   git init
   git add .
   git commit -m "U diyaarinta hawadda iyo SEO"
   ```
3. Samee repository cusub oo GitHub ah oo magaciisu yahay `Delmar-Dev-portfolio`.
4. Ku xidh oo u dir (Push) code-ka:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Delmar-Dev-portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Tillaabada 2aad: Shid GitHub Pages

1. Gal repository-gaaga ee GitHub.com.
2. Guji **Settings** -> **Pages**.
3. Qaybta **Branch**, ka dooro `main` iyo `/ (root)`, dabadeed guji **Save**.
4. Sug 1-2 daqiiqo. Boggaagu wuxuu noqon doonaa live: `https://YOUR_USERNAME.github.io/Delmar-Dev-portfolio/`

## Tillaabada 3aad: Is-diiwaangelinta Google Search (SEO)

Si bogaaga looga helo Google search:

1. Gal [Google Search Console](https://search.google.com/search-console).
2. Ku dar link-gaaga (URL): `https://YOUR_USERNAME.github.io/Delmar-Dev-portfolio/`.
3. Dooro **URL prefix** oo hubi lahaanshaha boga (Verification) adigoo soo dejinaya HTML file-ka ay ku siiyaan, kuna daraya folder-kaaga mashruuca, dabadeedna `git push` ku samaynaya.
4. Marka la xaqiijiyo, guji **Request Indexing** si Google u bilaabo baadhista bogaaga.

## Tillaabada 4aad: Tijaabada Muuqaalka Social Media

Isticmaal [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) si aad u aragto sida boggagu u muuqanayo marka aad LinkedIn ku wadaagto.
