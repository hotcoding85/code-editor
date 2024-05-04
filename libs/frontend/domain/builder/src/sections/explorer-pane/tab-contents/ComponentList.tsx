import type { IAtom, IComponent } from '@codelab/frontend/abstract/core'
import { ErrorBoundary } from '@codelab/frontend/presentation/view'
import { Space } from 'antd'
import Input from 'antd/lib/input'
import debounce from 'lodash/debounce'
import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'
import { observer } from 'mobx-react-lite'
import React, { useRef, useState } from 'react'
import { DraggableComponentItem } from './ComponentItem'

const { Search } = Input

export const ComponentList = observer<{
  components: Array<IAtom | IComponent>
  selectedIds?: Array<string>
  onDelete?(id: string): void
  onEdit?(id: string): void
  onSelect?(id: string): void
}>(({ components, onDelete, onEdit, onSelect, selectedIds }) => {
  const [searchValue, setSearchValue] = useState('')

  const debouncedSearch = useRef(
    debounce((nextValue: string) => setSearchValue(nextValue), 200),
  ).current

  const filteredItems = filter(components, (component) =>
    component.name.toLowerCase().includes(searchValue.toLocaleLowerCase()),
  )

  return (
    <>
      <Search
        allowClear
        key={1}
        onChange={(event) => debouncedSearch(event.target.value)}
        placeholder="Search component"
        style={{ marginBottom: 10 }}
      />
      <ErrorBoundary>
        <Space direction="vertical" size="small" style={{ display: 'flex' }}>
          {sortBy(filteredItems, 'name').map((component) => (
            <DraggableComponentItem
              component={component}
              key={component.id}
              onDelete={onDelete}
              onEdit={onEdit}
              onSelect={onSelect}
              selected={selectedIds?.includes(component.id)}
            />
          ))}
        </Space>
      </ErrorBoundary>
    </>
  )
})
