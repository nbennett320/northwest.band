import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import ChevronUpDown from '../icons/ChevronUpDown'

export interface MenuOption {
  label: string
  value: string
  data?: Record<string, any>
}

interface Props {
  label: string
  value?: string
  options: MenuOption[]
  onChange?: (
    ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
    option: MenuOption
  ) => void
}

const DropdownSelect = (props: Props) => {
  return (
    <Menu 
      as='div' 
      className="relative inline-block text-left"
    >
      <div>
        <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
            {props.value?.toLowerCase() ?? props.label.toLowerCase()}
          <ChevronUpDown className='-mr-1 ml-2 h-5 w-5 text-gray-400' />
        </Menu.Button>
      </div>

      <Transition 
        as={React.Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {props.options.map(option => (
              <Menu.Item key={option.value}>
                {({ active }) => (
                  <a
                    onClick={(ev) => { props?.onChange && props?.onChange(ev, option) }}
                    href='#'
                    className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`}
                  >
                    {option.label.toLowerCase()}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownSelect
