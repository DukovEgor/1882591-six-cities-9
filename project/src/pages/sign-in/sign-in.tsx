import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';
import { toast } from 'react-toastify';

export default function SignIn() {

  const dispatch = useAppDispatch();

  const { city } = useAppSelector((state) => state);

  const { register, reset, handleSubmit, formState: { errors } } = useForm<AuthData>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<AuthData> = (data) => {
    dispatch(loginAction(data));
    reset();
  };

  errors.login && toast.error(errors.login?.message);
  errors.password && toast.error(errors.password?.message);

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  {...register('login',
                    {
                      required: 'Email is required field',
                      minLength: 1,
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter valid email!',
                      },
                    },
                  )}
                  className="login__input form__input"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  {...register('password',
                    {
                      required: 'Password is required field',
                      minLength: 1,
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[0-9]).{1,16}$/,
                        message: 'Please enter valid password!',
                      },
                    },
                  )}
                  className="login__input form__input"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>{city.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}
