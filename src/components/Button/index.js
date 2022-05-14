import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Styles from './Button.module.scss';

const cx = classNames.bind(Styles);

function Button({
    to,
    href,
    text = false,
    primary = false,
    outline = false,
    disable = false,
    rounded = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const classes = cx('wrapper', {
        text,
        primary,
        outline,
        disable,
        rounded,
        small,
        large,
        [className]: className,
    });

    const props = {
        onClick,
        ...passProps,
    };

    // Remove even listener when btn is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
