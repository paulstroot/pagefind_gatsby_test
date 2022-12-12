import * as React from "react"
import { useEffect, useState } from "react"

const IndexPage = () => {
  const [pagefind, setPagefind] = useState()
  const [searchFor, setSearchFor] = useState('')
  const [nbrResults, setNbrResults] = useState(0)

  useEffect(() => {
    const initPagefind = async() => {
      try{
        const p = await import( "/public/_pagefind/pagefind.js");
        setPagefind(p)
      }catch(e){
        console.error("Could yout load Pagefind javascript")
        console.error(e.message)
      }
    }
    initPagefind()
  }, []);

  useEffect(() => {
    if(!pagefind) return
    doSearch();
  }, [searchFor, pagefind]);

  const doSearch = async() => {
    console.log("Search For", searchFor )
    const search = await pagefind.search(searchFor);
    setNbrResults(search.results.length)
    // const searchResults = await Promise.all(search.results.slice(0, search.results.length > 20 ? 20 : search.results.length).map(r => r.data()));
  }

  return (
    <main>
      <h1>
        PageFind Gatsby Minimal Reproduction
      </h1>
      <div className="flex w-full gap-1">
        <label htmlFor="querystring" className="sr-only">Search</label>
        <input
          type="Search"
          id="querystring"
          value={searchFor}
          onChange={(e) => setSearchFor(e.target.value)}
          placeholder="Search For"
        />
      </div>
      <br/><br/>
      <div>
        {nbrResults} results returned.
      </div>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
