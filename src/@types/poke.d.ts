type PokemonStat = {
    name:string;
    url:string
}
export type PokemonApiObject = {
    base_stat: number;
    effort: number;
    stat: PokemonStat
}