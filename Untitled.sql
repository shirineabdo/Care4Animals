CREATE TABLE [User] (
  [User_Id] int PRIMARY KEY,
  [User_Name] char,
  [User_Phone] varchar(10),
  [User_Email] varchar(30),
  [User_Password] varchar(8),
  [User_Role] char,
  [Created_at] timestamp
)
GO

CREATE TABLE [Pet] (
  [Pet_Id] int PRIMARY KEY,
  [User_Id] int,
  [Pet_name] nvarchar(255),
  [Pet_age] int,
  [Pet_species] nvarchar(255),
  [Pet_breed] nvarchar(255),
  [Pet_color] nvarchar(255),
  [Pet_description] nvarchar(255)
)
GO

CREATE TABLE [LostReport] (
  [LostReport_Id] int PRIMARY KEY,
  [User_Id] int,
  [Pet_Id] int,
  [LostReport_lastLocation] nvarchar(255),
  [LostReport_lostDate] datetime,
  [LostReport_reward] decimal,
  [LostReport_notes] nvarchar(255),
  [LostReport_status] nvarchar(255)
)
GO

CREATE TABLE [FoundReport] (
  [FoundReport_Id] int PRIMARY KEY,
  [User_Id] int,
  [FoundReport_species] nvarchar(255),
  [FoundReport_breed] nvarchar(255),
  [FoundReport_color] nvarchar(255),
  [FoundReport_location] nvarchar(255),
  [FoundReport_foundDate] datetime,
  [FoundReport_notes] nvarchar(255),
  [FoundReport_status] nvarchar(255)
)
GO

CREATE TABLE [Shelter] (
  [Shelter_Id] int PRIMARY KEY,
  [User_Id] int,
  [Shelter_name] nvarchar(255),
  [Shelter_address] nvarchar(255),
  [Shelter_email] nvarchar(255),
  [Shelter_phone] nvarchar(255),
  [Shelter_website] nvarchar(255)
)
GO

CREATE TABLE [EmergencyRescue] (
  [EmergencyRescue_id] int PRIMARY KEY,
  [User_Id] int,
  [Shelter_Id] int,
  [EmergencyRescue_animalType] nvarchar(255),
  [EmergencyRescue_description] nvarchar(255),
  [EmergencyRescue_level] nvarchar(255),
  [EmergencyRescue_location] nvarchar(255),
  [EmergencyRescue_status] nvarchar(255),
  [Created_at] datetime
)
GO

ALTER TABLE [Pet] ADD FOREIGN KEY ([User_Id]) REFERENCES [User] ([User_Id])
GO

ALTER TABLE [LostReport] ADD FOREIGN KEY ([User_Id]) REFERENCES [User] ([User_Id])
GO

ALTER TABLE [LostReport] ADD FOREIGN KEY ([Pet_Id]) REFERENCES [Pet] ([Pet_Id])
GO

ALTER TABLE [FoundReport] ADD FOREIGN KEY ([User_Id]) REFERENCES [User] ([User_Id])
GO

ALTER TABLE [Shelter] ADD FOREIGN KEY ([User_Id]) REFERENCES [User] ([User_Id])
GO

ALTER TABLE [EmergencyRescue] ADD FOREIGN KEY ([User_Id]) REFERENCES [User] ([User_Id])
GO

ALTER TABLE [EmergencyRescue] ADD FOREIGN KEY ([Shelter_Id]) REFERENCES [Shelter] ([Shelter_Id])
GO
