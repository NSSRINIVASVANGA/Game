import './index.css'

const TabItems = props => {
  const {tabDetails, clicked, extraVal} = props
  const {displayText, tabId} = tabDetails
  const tabClicked = () => {
    clicked(tabId)
  }
  const val = extraVal ? 'extra' : ''

  return (
    <li>
      <button className={`tab-btn ${val}`} onClick={tabClicked}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
