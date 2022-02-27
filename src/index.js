function getJSONByAPI() {
    fetch("./src/profile.json")
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((profile) => {
            console.log("The rock´s description ist: " + profile.description);

            console.log("The rock hat " + profile.followerCount + " follower");
        })
        .catch((error) => {
            console.log(error);
        });
}

//getJSONByAPI();

function workWithJSONLocal() {
    const json = `{
        "id": "11850309_1674349799447611_206178162",
        "name": "therock",
        "description": "founder",
        "followerCount": 292000000,
        "postCount": 6319,
        "followingCount": 490,
        "imgUrl": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-19/11850309_1674349799447611_206178162_a.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=eYSaC8uCBo4AX8uam09&tn=DIFkScmbN-yYV0GB&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT9BJ06QEsAjlGL9-DWh9pZRmpE8Cy0EvZn7ifWGq01-eQ&oe=61F1F884&_nc_sid=7bff83"
    }`;

    console.log(json);

    const javaScriptObject = JSON.parse(json);
    console.log(javaScriptObject);

    const wiederJSONString = JSON.stringify(javaScriptObject);
    console.log(wiederJSONString);

    const testObject = {
        name: "Hans",
        age: 23,
        hobbies: ["soccer", "cars"],
    };

    const auchJSONString = JSON.stringify(testObject);
    console.log(auchJSONString);
}

workWithJSONLocal();
