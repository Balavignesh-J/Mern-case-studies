type Profile={
    userName:string,
    bio:string|null,
    avatarUrl?:string
}

let Profile1:Profile={
    userName:"Kamal",
    bio:null
}

let Profile2:Profile={
    userName:"Rajini",
    bio:"Rajinikanth is a Software Developer from Tamilnadu",
    avatarUrl:"https://picsum.photos/200/300"
}

function showProfile(profile:Profile):void {
    let default_msg = profile.bio ?? "No Bio Available";
    let default_avatar = profile.avatarUrl ?? "No avatarUrl Available";

    console.log(`Username: ${profile.userName}`);
    console.log(`Bio: ${default_msg}`);
    console.log(`Avatar url: ${default_avatar}`);
}

showProfile(Profile1);
showProfile(Profile2);