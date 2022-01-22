// BEISPIEL 1. - JSON ÜBER MIT API ABRUFEN

/*
 * So könnte man JSON mit der fetch Funktion
 * von einem Server abrufen
 */
const jsonMitAPIBeispiel = async () => {
    // Hier wird auf die Antwort des Servers gewartet
    const response = await fetch("./src/profile.json");

    // Der "Antwort Fluss" wird gelesen, als JSON interpretiert und in ein JavaScript Objekt verwandelt
    const profile = await response.json();

    console.log(`The Rock hat ${profile.followerCount} follower`);

    console.log(
        `The Rock´s Instagram Profil Bescheibung: ${profile.description}`
    );
};

jsonMitAPIBeispiel();

// BEISPIEL 2. - MIT JSON LOKAL ARBEITEN

/*
 * Es gibt noch mehr Möglichkeiten mit JSON zu arbeiten
 */
const jsonAlsTextBeispiel = () => {
    const json = `{
        "id": "11850309_1674349799447611_206178162",
        "name": "therock",
        "description": "founder",
        "followerCount": 292000000,
        "postCount": 6319,
        "followingCount": 490,
        "imgUrl": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-19/11850309_1674349799447611_206178162_a.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=eYSaC8uCBo4AX8uam09&tn=DIFkScmbN-yYV0GB&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT9BJ06QEsAjlGL9-DWh9pZRmpE8Cy0EvZn7ifWGq01-eQ&oe=61F1F884&_nc_sid=7bff83"
    }
    `;

    /* Wie in Zeile 13 wird hier JSON in ein JavaScript Objekt
     * verwandelt. Der Unterschied ist, dass hier der JSON
     * String schon ganz vorhanden ist und nicht Stück für
     * Stück über das "Internet" ankommt. PS: Deshalb gibt es hier auch kein await. Wir warten ja auf nichts.
     */
    const profile = JSON.parse(json);

    console.log(`The Rock folgt ${profile.followingCount} Profilen`);

    console.log(`The Rock hat ${profile.postCount} mal geposted`);

    /* Es geht auch andersrum: JavaScript
     * Objekte können in JSON verwandelt werden um sie an einen Server zu schicken
     */
    const wiederJSON = JSON.stringify(profile);

    console.log(wiederJSON);
};

jsonAlsTextBeispiel();
