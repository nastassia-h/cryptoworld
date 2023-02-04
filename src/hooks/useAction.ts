import ActionCreators from '../store/action-creator/index'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useAction = () => {
   const dispatch = useDispatch()
   return bindActionCreators(ActionCreators, dispatch)
}