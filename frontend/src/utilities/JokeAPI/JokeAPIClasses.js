export class JokeClass{
    type
    setup
    punchline
    id
    constructor(jokeData = {}){
        this.type = jokeData.type ? String(jokeData.type): "joke is missing"
        this.setup= jokeData.setup ? String(jokeData.setup): "n/a"
        this.punchline = jokeData.punchline ? String(jokeData.punchline):"joke is still missing"
        this.id = jokeData.id ? Number(jokeData.id): 0
    }
}