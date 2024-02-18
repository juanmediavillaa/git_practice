const subjects = ["cat", "dog", "bird", "elephant", "monkey", "lion", "tiger", "bear", "snake", "horse", "rabbit", "fish", "turtle", "fox", "deer", "wolf", "giraffe", "zebra", "kangaroo", "penguin"];
const verbs = ["runs to", "jumps", "flies over", "sings on", "climbs", "swims across", "dances with", "paints", "reads", "writes about", "plays with", "listens to", "cooks", "builds", "fixes", "watches", "drives", "rides", "hugs", "kisses"];
const objects = ["ball", "tree", "river", "mountain", "house", "car", "book", "computer", "chair", "flower", "bridge", "pen", "phone", "lamp", "table", "cup", "door", "window", "sun", "moon"];

function generateRandomSentence() {
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];

    return ` The ${randomSubject} ${randomVerb} the ${randomObject}`;
}

const finalMessage = generateRandomSentence();
console.log(finalMessage);

