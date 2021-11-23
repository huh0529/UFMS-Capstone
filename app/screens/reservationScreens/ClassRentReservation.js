import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions, Image, Text, ScrollView } from 'react-native';
import axios from 'axios';
import { endPoint } from '../../src/endPoint';

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const BuildingTitle = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: ${({ width }) => width * 0.95}px;
  margin: 10px;
  padding: 10px 5px 10px 5px;
  border: 1px solid #d6dde4;
  border-radius: 4px;
  background-color: white;
`;

const ClassRentReservation = function ({ navigation }) {
  const width = Dimensions.get('window').width;
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    const getBuilding = async function () {
      try {
        const res = await axios.get(endPoint + 'reservation/building');
        res.data.map((building, idx) => {
          buildings.push({
            id: idx + 1,
            name: building,
            floor: [1, 2, 3, 4, 5, 6],
          });
        });
        setBuildings([...buildings]);
      } catch (err) {
        console.error(err);
      }
    };

    getBuilding();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
    });
  });

  return (
    <ScrollView>
      <Container>
        {buildings.map((item) => {
          return (
            <BuildingTitle
              key={item.id}
              width={width}
              onPress={() => {
                navigation.navigate('Class Rent Notice', { building: item });
              }}
            >
              <Image
                style={{ width: 70, height: 70, marginLeft: 5 }}
                source={require('../../assets/dummy-image.jpeg')}
              />
              <Text style={{ marginLeft: 10, fontSize: 20 }}>{item.name}</Text>
            </BuildingTitle>
          );
        })}
      </Container>
    </ScrollView>
  );
};

export default ClassRentReservation;
