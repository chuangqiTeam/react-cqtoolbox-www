import React from 'react';
import {Menu, SubMenu, MenuItem} from 'react-cqtoolbox/lib/menu';
import {Link} from 'react-router-dom';
import theme from './menu.css';

const CustomMenu = () => (
  <Menu theme={theme}>
    <MenuItem><Link to="/component/button">按钮（Button）</Link></MenuItem>
    <MenuItem><Link to="/component/font_icon">图标（FontIcon）</Link></MenuItem>
    <SubMenu title="下拉框">
      <MenuItem><Link to="/component/select">Select</Link></MenuItem>
      <MenuItem><Link to="/component/cascade_select">CascadeSelect</Link></MenuItem>
    </SubMenu>
    <SubMenu title="日期选择器">
      <MenuItem><Link to="/component/date_select">DateSelect</Link></MenuItem>
      <MenuItem><Link to="/component/date_range_select">DateRangeSelect</Link></MenuItem>
    </SubMenu>

    <MenuItem><Link to="/component/dialog">对话框（Dialog）</Link></MenuItem>
    <MenuItem><Link to="/component/input">输入框（Input）</Link></MenuItem>
    <MenuItem><Link to="/component/input_group">组合输入框（InputGroup）</Link></MenuItem>
    <MenuItem><Link to="/component/switch">开关（Switch）</Link></MenuItem>
    <MenuItem><Link to="/component/form_item">表单项（FormItem）</Link></MenuItem>
    <MenuItem><Link to="/component/autocomplete">自动完成（Autocomplete）</Link></MenuItem>
    <MenuItem><Link to="/component/tooltip">提示框（Tooltip）</Link></MenuItem>
    <MenuItem><Link to="/component/badge">徽章（Badge）</Link></MenuItem>
    <MenuItem><Link to="/component/lazy_image">异步加载图片（LazyImage）</Link></MenuItem>
    <MenuItem><Link to="/component/alert">警告提醒（Alert）</Link></MenuItem>
    <MenuItem><Link to="/component/tabs">标签页（Tabs）</Link></MenuItem>
    <MenuItem><Link to="/component/pagination">分页（Pagination）</Link></MenuItem>
    <MenuItem><Link to="/component/tag">标签（Tag）</Link></MenuItem>
    <MenuItem><Link to="/component/table">表格（Table）</Link></MenuItem>
  </Menu>
);

export default CustomMenu;
