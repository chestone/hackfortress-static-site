import { hideNav } from './src/utils/header'

exports.onRouteUpdate = ({ location }) => {
  return hideNav()
}