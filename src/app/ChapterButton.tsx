import {useRouter} from 'next/router'
import Link from 'next/link'
export  function ChapterButton(Chapter:string){
return(
    <Link href={`/${Chapter}`} passHref>
    <button>Next Chapter in your Story</button>
    </Link>
)
}

export function CharacterSheetButton(name:string){
return(
<Link href = {`/CharacterSheet/${name}`} passHref>
<button>Character Sheet</button>
</Link>
)
}