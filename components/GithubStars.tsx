import React, { useState, useEffect } from 'react'

interface StarsProps {
  url: string
}

export const Stars: React.FC<StarsProps> = ({ url }) => {
  const [stars, setStars] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/repos/${url}`)
      .then(res => res.json())
      .then(repo => {
        setStars(repo.stargazers_count)
      })
      .catch(error => {
        setError('Failed to fetch star count')
      })
  }, [url])

  if (error) {
    return <span>Error: {error}</span>
  }

  if (stars === null) {
    return <span>Loading...</span>
  }

  return <strong>{stars}</strong>
}