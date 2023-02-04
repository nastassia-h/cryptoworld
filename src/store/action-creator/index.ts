import * as CoinActionCreators from './coin'
import * as NewsActionCreators from './news'
import * as CoinDetailsCreators from './coinDetails'
import * as CoinHistoryCreators from './coinHistory'
import * as authCreators from './auth'
import * as exchangesCreators from './exchanges'

export default {
   ...CoinActionCreators,
   ...NewsActionCreators,
   ...CoinDetailsCreators,
   ...CoinHistoryCreators,
   ...authCreators,
   ...exchangesCreators,
}