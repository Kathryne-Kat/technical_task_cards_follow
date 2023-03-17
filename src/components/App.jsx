import FormFollow from './FormFollow/FormFollow';

export const App = () => {
  return (
    <section
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FormFollow />
    </section>
  );
};
