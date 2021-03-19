﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NEWCommanderCalendar.Models;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace NEWCommanderCalendar.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20210319154933_RequiredFieldaddedtoneweventpage")]
    partial class RequiredFieldaddedtoneweventpage
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityByDefaultColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("NEWCommanderCalendar.Models.Event", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("ColorTag")
                        .HasColumnType("text");

                    b.Property<DateTime>("EventDateTime")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("EventName")
                        .HasColumnType("text");

                    b.Property<string>("Image")
                        .HasColumnType("text");

                    b.Property<string>("Notes")
                        .HasColumnType("text");

                    b.Property<string>("TypeOfEvent")
                        .HasColumnType("text");

                    b.Property<string>("URL")
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("Events");
                });
#pragma warning restore 612, 618
        }
    }
}
