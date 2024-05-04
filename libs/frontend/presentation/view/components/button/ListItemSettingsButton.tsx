import SettingOutlined from '@ant-design/icons/lib/icons/SettingOutlined'
import React from 'react'
import type { ListItemButtonProps } from './ListItemButton'
import { ListItemButton } from './ListItemButton'

export type ListItemSettingsButtonProps = Omit<
  ListItemButtonProps,
  'icon' | 'title'
>

export const ListItemSettingsButton = (props: ListItemSettingsButtonProps) => {
  return (
    <ListItemButton
      icon={<SettingOutlined />}
      onClick={props.onClick}
      title="Settings"
    />
  )
}
