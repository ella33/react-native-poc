import React from 'react';
import { Divider, Text } from 'react-native-elements';
import { useSelector } from 'react-redux';
import ScreenContent from '@components/shared/Content';
import { IUser } from '@app/redux/models/user';
import { SemiboldText, LightText } from '@components/shared/Typography';
import { Paragraph } from '@components/shared/Layout';

type UserInfoFieldProps = {
  label: string;
  value: string;
};

const UserInfoField = ({ label, value }: UserInfoFieldProps) => (
  <Paragraph>
    <SemiboldText>{label}</SemiboldText>
    <LightText>{value}</LightText>
  </Paragraph>
);

const ProfileScreen = () => {
  const user: IUser = useSelector(state => state.user.data);

  return (
    <ScreenContent>
      <Text h1>Your details</Text>

      <Text h4>Personal</Text>
      <UserInfoField label="Name: " value={user.name} />
      <UserInfoField label="Email: " value={user.email} />
      <UserInfoField label="Phone: " value={user.phone} />

      <Divider />

      <Text h4>Address</Text>
      <UserInfoField label="Street: " value={user.address.street} />
      <UserInfoField label="City: " value={user.address.city} />
      <UserInfoField label="Suite: " value={user.address.suite} />
      <UserInfoField label="Zipcode: " value={user.address.zipcode} />

      <Divider />

      <Text h4>Company</Text>
      <UserInfoField label="Name: " value={user.company.name} />
      <UserInfoField label="Business: " value={user.company.business} />
      <UserInfoField label="Quote: " value={user.company.quote} />

    </ScreenContent>
  );
};

export default ProfileScreen;
