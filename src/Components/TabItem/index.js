import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const tabItemClass = isActive ? 'active-margin' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="list-item">
      <button type="button" className="tab-buttons">
        <p className={`tabItem ${tabItemClass}`} onClick={onClickTabItem}>
          {displayText}
        </p>
      </button>
    </li>
  )
}

export default TabItem
