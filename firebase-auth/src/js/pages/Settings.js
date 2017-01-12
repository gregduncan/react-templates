import React from "react"
import SettingEdit from "../components/SettingEdit"
import SettingPassword from "../components/SettingPassword"
import SettingAvatar from "../components/SettingAvatar"

export default class Settings extends React.Component {

  render() {

    return (
      <div>
        <h1>Settings </h1>
        <SettingEdit />
        <SettingPassword />
        <SettingAvatar />
      </div>
    )
  }
}
