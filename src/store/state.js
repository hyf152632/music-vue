import {playMode} from 'common/js/config'
import { loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

//只放最基础的数据，可以扩展来的数据都放在getters中
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist:[],
  sequenceList:[],
  mode: playMode.sequence,
  currentIndex: -1 ,  //当前播放歌曲的索引
  disc: {},
  topList:{},
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state


