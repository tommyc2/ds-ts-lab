import { Friend, Colleague, ColleagueHistory, EmailContact } from "./myTypes";
import { friends, colleagues } from "./01-basics";

function older(f: Friend) {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(friends: Friend[]) {
    const friendsListStr: string[] = []
    for (let i: number = 0; i <= friends.length - 1; i++) {
        friendsListStr.push(`${friends[i].name} is now ${friends[i].age}`)
    }
    return friendsListStr;
}

//console.log(older(friends[0]))
//console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

//console.log(highestExtension(colleagues.current));

function addColleague(currentColleagues: Colleague[], name: string, department: string, email: string) {
    const c: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: highestExtension(currentColleagues).contact?.extension + 1
        },
    };
    colleagues.current.push(c)
    return c
}

//addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(colleagues: Colleague[],sorter: (c1: Colleague, c2: Colleague) => number, max? : number): EmailContact[] {
  let end = colleagues.length
  if (max !== undefined) {
    end = max < 2 ? 1 : max
 }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}

// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

  
  //console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  //console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));
  
  function findFriends(friends: Friend[], findFriend: (f: Friend) => boolean) {
    return friends.filter(findFriend);
  }

//console.log(findFriends(friends, (friend) => friend.age < 35));
//console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));

