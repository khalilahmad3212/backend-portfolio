interface Skill {
  name: string
  percentage: number,
  ability: string
}

const skillsData: Skill[] = [
  {
    name: 'Javascript',
    ability: 'Expert',
    percentage: 9
  },
  {
    name: "Node.js",
    ability: "Expert",
    percentage: 8
  },
  {
    name: 'Express.js',
    ability: 'Expert',
    percentage: 9
  },
  {
    name: 'Nestjs',
    ability: 'Expert',
    percentage: 9
  },
  {
    name: 'Mysql',
    ability: 'Expert',
    percentage: 9
  },
  {
    name: 'Postgresql',
    ability: 'Expert',
    percentage: 9
  },
  {
    name: 'MongoDB',
    ability: 'Expert',
    percentage: 9
  },
  {
    name: 'CI/CD',
    ability: 'Expert',
    percentage: 7
  },
  {
    name: 'Docker',
    ability: 'Expert',
    percentage: 8
  },
  {
    name: 'Kubernetes',
    ability: 'Expert',
    percentage: 7
  },{
    name: 'AWS',
    ability: 'Expert',
    percentage: 8
  }
]

export default skillsData;