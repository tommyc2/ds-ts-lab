import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))


function sortArray<T>(array: T[], sort: (a: T, b: T) => number) {
    return array.sort((sort))
}

// Sort friends by age
console.log(sortArray<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
    sortArray<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);
