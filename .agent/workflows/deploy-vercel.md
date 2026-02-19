---
description: Sida bogaaga loogu saaro Vercel looguna xidho GitHub si automatic ah
---

# Hagaha Hawada-Saarka ee Vercel

Vercel waa habka ugu dhakhsaha badan ee aad bogaaga ku saari karto hawada, isagoo si automatic ah ula xidhiidha GitHub-kaaga.

## Tillaabada 1aad: Ku xidh GitHub iyo Vercel

1. Gal [Vercel.com](https://vercel.com/) oo iska diiwaangeli adigoo isticmaalaya **GitHub account**-kaaga.
2. Guji badhanka **"Add New..."** dabadeed dooro **"Project"**.
3. Waxaad arki doontaa liiska repositories-kaaga GitHub. Soo hel **"Delmar-Dev-portfolio"** dabadeed guji **"Import"**.

## Tillaabada 2aad: Habaynta Mashruuca (Configuration)

1. **Framework Preset**: Vercel wuxuu si automatic ah u garan doonaa inuu yahay "Other" ama "Static HTML". Sidaas u daa.
2. **Root Directory**: Hubi inuu ku saanyahay `./`.
3. **Environment Variables**: Qaybtan **iska dhaaf (skip)**. Website-kaagu uma baahna wax Key ama Value ah maadaama uu yahay static HTML.
4. Guji badhanka **"Deploy"**.

## Tillaabada 3aad: Helitaanka Boga (Global Access)

1. Sug inta build-ka uu dhamaanayo (badanaa waxay qaadataa wax ka yar 30 ilbiriqsi).
2. Vercel wuxuu ku siinayaa link (domain) u eg: `delmar-dev-portfolio.vercel.app`.
3. Boggaagu hadda waa live oo caalamka oo dhan ayaa arki kara!

## Tillaabada 4aad: Cusboonaysiin Automatic ah

Muuqaalka ugu fiican ee Vercel:

- Markasta oo aad `git push` ku samayso isbeddel cusub GitHub-kaaga (main branch), Vercel wuxuu **si automatic ah** u cusboonaysiinayaa website-kaaga. Uma baahnid inaad adigu gacanta wax danbe u qabato!

## Tillaabada 5aad: Domain Gaar ah (Optional)

Haddii aad iibsato domain gaar ah (sida `delmardev.com`), waxaad si fudud ugu dari kartaa qaybta **Settings** -> **Domains** ee dashboard-kaaga Vercel.
