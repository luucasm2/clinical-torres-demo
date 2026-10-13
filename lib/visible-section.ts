export function visibleSection(sections:{id:string;top:number}[],marker:number):string{
 const ordered=[...sections].sort((a,b)=>a.top-b.top);
 return ordered.filter(s=>s.top<=marker).at(-1)?.id??ordered[0]?.id??'inicio';
}
