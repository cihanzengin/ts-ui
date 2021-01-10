import s from './remove.module.scss';

const Remove = ({ ...props }) => (
  <button {...props} className={s.wrap}>
    <span />
    <span />
  </button>
);

export default Remove;
