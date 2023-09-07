import { capitalize, formatPhoneNumber } from "./utils/transformations";

export const InfoRow = ({ label, value }) => {
  return (
    <div>
      <span style={{ marginRight: 5 }}>
        <b>{label}:</b>
      </span>
      <span>{value}</span>
    </div>
  );
};
export const ProfileInformation = ({ userData }) => {
  if (!userData) {
    return (
      <>
        <u>
          <h3>Your Submitted User Information</h3>
        </u>
        <div className="user-info">
          <div>No information provided</div>
        </div>
      </>
    );
  }
  // eslint-disable-next-line no-unused-vars
  const { email, firstName, lastName, phone, city } = userData;
  return (
    <>
      <u>
        <h3>Your Submitted User Information</h3>
      </u>
      <div className="user-info">
        <InfoRow label="Email" value={email} />
        <InfoRow label="First Name" value={capitalize(firstName)} />
        <InfoRow label="Last Name" value={capitalize(lastName)} />
        <InfoRow label="City" value={city} />
        {/* You will need to format the string "nnnnnnn" as "nn-nn-nn-n" */}
        <InfoRow label="Phone" value={formatPhoneNumber(phone)} />
      </div>
    </>
  );
};
