import './cd-button.css';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Button text' },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'light', 'danger', 'export'],
      description: 'Visual variant',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Size',
    },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
};

const variantClass = (v) => (v && v !== 'default') ? ` cd-button--${v}` : '';
const sizeClass = (s) => s === 'small' ? ' cd-button--small' : '';

const Template = ({ label, variant, size, disabled }) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = `cd-button${variantClass(variant)}${sizeClass(size)}`;
  if (disabled) btn.disabled = true;
  btn.innerHTML = `<span class="cd-button__text">${label}</span>`;
  return btn;
};

export const Primary = Template.bind({});
Primary.args = { label: 'Primary button', variant: 'default', size: 'default', disabled: false };

export const Outline = Template.bind({});
Outline.args = { label: 'Outline button', variant: 'outline', size: 'default', disabled: false };

export const Small = Template.bind({});
Small.args = { label: 'Small button', variant: 'default', size: 'small', disabled: false };

export const Danger = Template.bind({});
Danger.args = { label: 'Delete', variant: 'danger', size: 'default', disabled: false };

export const Export = Template.bind({});
Export.args = { label: 'Export', variant: 'export', size: 'default', disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { label: 'Disabled', variant: 'default', size: 'default', disabled: true };

export const Light = Template.bind({});
Light.args = { label: 'Light button', variant: 'light', size: 'default', disabled: false };
Light.parameters = {
  backgrounds: { default: 'OCHA Blue' },
};

/**
 * All variants side by side for comparison.
 */
export const AllVariants = () => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.gap = '1rem';
  wrapper.style.flexWrap = 'wrap';
  wrapper.style.alignItems = 'center';

  const variants = [
    { label: 'Primary', classes: 'cd-button' },
    { label: 'Outline', classes: 'cd-button cd-button--outline' },
    { label: 'Small', classes: 'cd-button cd-button--small' },
    { label: 'Danger', classes: 'cd-button cd-button--danger' },
    { label: 'Export', classes: 'cd-button cd-button--export' },
    { label: 'Disabled', classes: 'cd-button', disabled: true },
  ];

  variants.forEach(({ label, classes, disabled }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = classes;
    if (disabled) btn.disabled = true;
    btn.innerHTML = `<span class="cd-button__text">${label}</span>`;
    wrapper.appendChild(btn);
  });

  return wrapper;
};
