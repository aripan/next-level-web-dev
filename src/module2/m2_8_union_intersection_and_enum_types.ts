type NoobDeveloper = {
    name: string;
}

type JuniorDeveloper = {
    name: string;
    expertise: string;
    experience: number;
}



//@ union type (using |)
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Jone Doe',
    expertise: 'JS',
    experience: 1
}

//@ intersection type (using &)
// combine both types
type JuniorDeveloper2 = NoobDeveloper & {
    expertise: string;
    experience: number;
}

type NextLevelDeveloper = JuniorDeveloper2 & {
    leadershipExperience: number;
}

const experiencedDeveloper: NextLevelDeveloper = {
    name: 'Jane Doe', // coming from NoobDeveloper
    expertise: 'React', // coming from JuniorDeveloper2
    experience: 2, // coming from JuniorDeveloper2
    leadershipExperience: 1 // coming from NextLevelDeveloper
}

//@ enum type
enum Level {
    Junior = 'junior', mid = 'mid', senior = 'senior'
}

type ExperienceType = NextLevelDeveloper & {
    level: Level;
}

const seniorDeveloper: ExperienceType = {
    name: 'Jane Doe', // coming from NoobDeveloper
    expertise: 'React', // coming from JuniorDeveloper2
    experience: 2, // coming from JuniorDeveloper2
    leadershipExperience: 1, // coming from NextLevelDeveloper
    level: Level.senior // coming from ExperienceType
}

//! enum is not recommended to use
