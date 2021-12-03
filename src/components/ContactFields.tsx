import { FunctionComponent } from 'react';

const ContactFields: FunctionComponent = () => {
  return (
    <>
      <div>Toimitus</div>
      <div className="">
        <label htmlFor="exampleName">Nimi</label>
        <input
          className="u-full-width"
          type="email"
          placeholder=""
          id="nameInput"
        />

        <label htmlFor="exampleEmailInput">Sähköposti</label>
        <input
          className="u-full-width"
          type="email"
          placeholder=""
          id="emailInput"
        />

        <label htmlFor="exampleEmailInput">Osoite</label>
        <input
          className="u-full-width"
          type="email"
          placeholder=""
          id="addressInput"
        />

        <label htmlFor="exampleEmailInput">Postinumero</label>
        <input
          className="u-full-width"
          type="email"
          placeholder=""
          id="exampleEmailInput"
        />

        <label htmlFor="exampleEmailInput">Postitoimipaikka</label>
        <input
          className="u-full-width"
          type="email"
          placeholder=""
          id="exampleEmailInput"
        />
      </div>
    </>
  );
};

export default ContactFields;
