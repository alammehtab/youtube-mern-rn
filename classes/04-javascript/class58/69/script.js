var profiles = [
    {
        name: "John Doe",
        age: 28,
        occupation: "Web Developer",
        bio: "John is a passionate developer who loves coding and coffee."
    },
    {
        name: "Jane Smith",
        age: 32,
        occupation: "Graphic Designer",
        bio: "Jane is a creative designer who enjoys creating beautiful visuals."
    },
    {
        name: "Alex Johnson",
        age: 25,
        occupation: "Software Engineer",
        bio: "Alex is a tech enthusiast with a love for software and gadgets."
    }
];

function loadProfile(index) {
    var profile = profiles[index];
    document.getElementById("profile-name").textContent = `Name: ${profile.name}`;
    document.getElementById("profile-age").textContent = `Age: ${profile.age}`;
    document.getElementById("profile-occupation").textContent = `Occupation: ${profile.occupation}`;
    document.getElementById("profile-bio").textContent = `Bio: ${profile.bio}`;
}

loadProfile(0);
