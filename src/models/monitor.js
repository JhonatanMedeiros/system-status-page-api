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
      description: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      interval: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 5000
      },
      status: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      }
    },
    {
      tableName: 'monitors'
    });
};
