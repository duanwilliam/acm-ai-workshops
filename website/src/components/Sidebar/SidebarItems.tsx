/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE-docusaurus file in the root directory of the website source tree.
 */

import type { SidebarProps } from ".";
import SidebarItem from "./SidebarItem";

const SidebarItems = ({ items, ...props }: SidebarProps): JSX.Element => {
  return (
    <>
      {items.map((item, i) => (
        <SidebarItem
          key={i} // sidebar is static, the index does not change
          item={item}
          {...props}
        />
      ))}
    </>
  );
}

export default SidebarItems;