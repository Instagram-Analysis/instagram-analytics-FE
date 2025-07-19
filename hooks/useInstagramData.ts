import { useState } from 'react'
import {
  fetchFollowers,
  fetchFollowing,
  fetchNonFollowers,
  fetchTopLikers,
} from '../services/instagramService'
import { Follower, Liker } from '../types/instagram'

type State<T> = {
  data: T[]
  loading: boolean
  error: string | null
}

export default function useInstagramData() {
  const [followersState,    setFollowersState]    = useState<State<Follower>>({ data: [], loading: false, error: null })
  const [followingState,    setFollowingState]    = useState<State<Follower>>({ data: [], loading: false, error: null })
  const [nonFollowersState, setNonFollowersState] = useState<State<Follower>>({ data: [], loading: false, error: null })
  const [topLikersState,    setTopLikersState]    = useState<State<Liker>>   ({ data: [], loading: false, error: null })

  const wrap = async <T>(
    fn: () => Promise<T[]>,
    setter: React.Dispatch<React.SetStateAction<State<T>>>
  ) => {
    setter(s => ({ ...s, loading: true, error: null }))
    try {
      const data = await fn()
      setter({ data, loading: false, error: null })
    } catch (e: any) {
      setter(s => ({ ...s, loading: false, error: e.message || 'Unknown error' }))
    }
  }

  return {
    followers:    followersState,
    following:    followingState,
    nonFollowers: nonFollowersState,
    topLikers:    topLikersState,

    getFollowers:    () => wrap(fetchFollowers,    setFollowersState),
    getFollowing:    () => wrap(fetchFollowing,    setFollowingState),
    getNonFollowers: () => wrap(fetchNonFollowers, setNonFollowersState),
    getTopLikers:    () => wrap(fetchTopLikers,    setTopLikersState),
  }
}
