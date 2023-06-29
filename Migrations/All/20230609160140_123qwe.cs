using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication1.Migrations.All
{
    /// <inheritdoc />
    public partial class _123qwe : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "year_end",
                table: "schoolyear",
                type: "longtext",
                nullable: false);

            migrationBuilder.AddColumn<string>(
                name: "year_start",
                table: "schoolyear",
                type: "longtext",
                nullable: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "year_end",
                table: "schoolyear");

            migrationBuilder.DropColumn(
                name: "year_start",
                table: "schoolyear");
        }
    }
}
