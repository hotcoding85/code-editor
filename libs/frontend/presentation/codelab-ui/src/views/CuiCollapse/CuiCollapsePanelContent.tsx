import React from 'react'
import { CuiSkeletonWrapper } from '../../components'

export interface CuiCollapsePanelContentProps {
  content: React.ReactNode
  isLoading?: boolean
  label: string
}

export const CuiCollapsePanelContent = ({
  content,
  isLoading = false,
  label,
}: CuiCollapsePanelContentProps) => {
  return (
    <div
      className="flex h-full min-h-1/3 w-full flex-col overflow-auto bg-white"
      data-cy={`codelabui-sidebar-view-content-${label}`}
    >
      <div className="w-full flex-1 overflow-auto">
        <CuiSkeletonWrapper isLoading={isLoading}>{content}</CuiSkeletonWrapper>
      </div>
    </div>
  )
}
