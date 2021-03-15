using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NEWCommanderCalendar.Migrations
{
    public partial class AddEventDateTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateOfEvent",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "TimeOfEvent",
                table: "Events");

            migrationBuilder.AddColumn<DateTime>(
                name: "EventDateTime",
                table: "Events",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EventDateTime",
                table: "Events");

            migrationBuilder.AddColumn<string>(
                name: "DateOfEvent",
                table: "Events",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TimeOfEvent",
                table: "Events",
                type: "text",
                nullable: true);
        }
    }
}
