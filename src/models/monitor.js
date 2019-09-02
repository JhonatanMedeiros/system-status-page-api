export default (sequelize, DataTypes) => {
  return sequelize.define('Monitor', {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      refresh: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    },
    {
      tableName: 'monitors'
    });
};
