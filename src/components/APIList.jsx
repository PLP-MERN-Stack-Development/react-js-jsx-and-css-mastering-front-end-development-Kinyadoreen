import React, { useState, useEffect } from 'react'
import Button from './Button'

const PAGE_SIZE = 10

const APIList = () => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return
        setItems(data)
      })
      .catch((err) => setError(err.message || 'Failed to fetch'))
      .finally(() => mounted && setLoading(false))

    return () => { mounted = false }
  }, [])

  const filtered = items.filter((it) => it.title.includes(query) || it.body.includes(query))
  const total = filtered.length
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  useEffect(() => { if (page > pages) setPage(1) }, [pages])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-grow px-3 py-2 border rounded"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="secondary" size="sm" onClick={() => { setQuery('') }}>Clear</Button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <ul className="space-y-3">
            {pageItems.map((p) => (
              <li key={p.id} className="border rounded p-3">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{p.body}</p>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-500">Showing {pageItems.length} of {total} posts</p>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>Prev</Button>
              <div className="px-3 py-2">{page} / {pages}</div>
              <Button size="sm" variant="secondary" onClick={() => setPage((p) => Math.min(pages, p + 1))} disabled={page === pages}>Next</Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default APIList
